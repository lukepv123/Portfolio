variable "tags" {

    type = map
    description = "Tags for Azure services and resources"
    default = {
        ambiente = "development"
        responsavel = "responsable name"
    }
}

variable "name_rg" {
  type = string 
  description = "Name of the RG"
  default = "newResourceGroup"
}

variable "location" {
    type = string
    description = "Location of the resource group"
    default = "brazilsouth"
  
}

variable "address_space" {
    type = list 
    description = "List of adress spaces"
default = ["10.0.0.0/16", "192.168.0.0/16"]


}   

variable "subscription_id" {
type = string
description = "Subscription of azure account"
default = "Here you fill your assignature id"
}