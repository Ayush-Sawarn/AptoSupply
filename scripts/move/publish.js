require("dotenv").config();
const fs = require("node:fs");
const cli = require("@aptos-labs/ts-sdk/dist/common/cli/index.js");
const aptosSDK = require("@aptos-labs/ts-sdk");

async function publish() {
  const move = new cli.Move();

  try {
    const response = await move.createObjectAndPublishPackage({
      packageDirectoryPath: "contract",
      addressName: "supply_chain_addr",
      namedAddresses: {
        supply_chain_addr: process.env.NEXT_MODULE_PUBLISHER_ACCOUNT_ADDRESS,
      },
      extraArguments: [
        `--private-key=${process.env.NEXT_MODULE_PUBLISHER_ACCOUNT_PRIVATE_KEY}`,
        `--url=${aptosSDK.NetworkToNodeAPI[process.env.NEXT_PUBLIC_APP_NETWORK]}`,
      ],
    });

    console.log("Response:", response); // Log the response to see its structure

    if (!response || !response.objectAddress) {
      throw new Error("Invalid response format: objectAddress not found");
    }

    const filePath = ".env";
    let envContent = "";

    // Check .env file exists and read it
    if (fs.existsSync(filePath)) {
      envContent = fs.readFileSync(filePath, "utf8");
    }

    // Regular expression to match the NEXT_PUBLIC_MODULE_ADDRESS variable
    const regex = /^NEXT_PUBLIC_MODULE_ADDRESS=.*$/m;
    const newEntry = `NEXT_PUBLIC_MODULE_ADDRESS=${response.objectAddress}`;

    // Check if NEXT_PUBLIC_MODULE_ADDRESS is already defined
    if (envContent.match(regex)) {
      // If the variable exists, replace it with the new value
      envContent = envContent.replace(regex, newEntry);
    } else {
      // If the variable does not exist, append it
      envContent += envContent ? `\n${newEntry}` : newEntry;
    }

    // Write the updated content back to the .env file
    fs.writeFileSync(filePath, envContent, "utf8");

    console.log("Successfully published and updated .env file");
  } catch (error) {
    console.error("Error during publication:", error);
    process.exit(1);
  }
}

publish();
