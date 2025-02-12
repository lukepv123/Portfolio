# This Terraform script creates a Resource Group and a Virtual Network (VNet) in Azure.

# Steps to test this Terraform configuration:

# 1. Ensure you have Terraform installed on your machine.
# 2. Authenticate with Azure using `az login` if you haven’t already.
# 3. Fill in your Azure subscription details in the `variables.tf` file.
# 4. Run `terraform init` to initialize the working directory and install the required provider plugins.
# 5. Run `terraform plan` to preview the changes that Terraform will apply.
# 6. Run `terraform apply` to create the resources in Azure.
# 7. To remove the created resources, run `terraform destroy` when no longer needed.

# Define the Azure provider with the required subscription details
provider "azurerm" {
  features {}

  # Replace with your actual Azure subscription ID in `variables.tf`
  subscription_id = var.subscription_id
}

# Create a Resource Group
resource "azurerm_resource_group" "resourceGroup" {
  name     = var.name_rg        # Resource Group name, defined in `variables.tf`
  location = var.location       # Azure region, e.g., "East US"
  tags     = var.tags           # Tags for organizing resources
}

# Create a Virtual Network (VNet) inside the Resource Group
resource "azurerm_virtual_network" "vnet" {
  name                = "vnet-terraform-treinamento"     # Virtual Network name
  resource_group_name = azurerm_resource_group.resourceGroup.name  # Associating VNet with Resource Group
  location            = var.location                    # VNet location (same as Resource Group)
  address_space       = var.address_space               # CIDR block for the VNet, defined in `variables.tf`
}

