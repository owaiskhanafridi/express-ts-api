import { IDatabaseService } from './IDatabaseService';
import { SqlServerService } from './sql/SQLServerService';
// future: import { PostgresService } from './postgres/PostgresService'

let service: IDatabaseService;

export function getDatabaseService(): IDatabaseService {
  if (!service) {
    service = new SqlServerService();
    // Add switch logic later using env
  }
  return service;
}