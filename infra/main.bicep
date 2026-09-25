// Production infrastructure for Ledgerline on Azure.
//
// Replace this file with your own Bicep (split into modules if you like).
// See "Part 4" in the README for what the production setup should include.
//
// Check it compiles and passes the linter, no Azure subscription needed:
//   az bicep build --file infra/main.bicep

targetScope = 'resourceGroup'

@description('Azure region for all resources.')
param location string = resourceGroup().location

@description('Short environment name, e.g. prod or staging.')
@allowed(['staging', 'prod'])
param environment string = 'prod'

var namePrefix = 'ledgerline-${environment}'

output namePrefix string = namePrefix
output location string = location
