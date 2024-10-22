# Variables
$resourceGroupName = "your-resource-group"
$location = "eastus"
$storageAccountName = "yourstorageaccountname"
$skuName = "Standard_LRS"
$kind = "StorageV2"
$accessTier = "Hot"

# Login to Azure
Connect-AzAccount

# Create Resource Group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create Storage Account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $skuName `
                     -Kind $kind `
                     -AccessTier $accessTier