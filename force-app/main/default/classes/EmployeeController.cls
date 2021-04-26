public with sharing class EmployeeController {
    @AuraEnabled(cacheable=true)
    public static List<Employees__c> getEmployeeList() {
        return [
            SELECT Id, Name, Phone__c, Email__c, Birthday__c, Memo__c
            FROM Employees__c
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Employees__c> findEmployee(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Phone__c, Email__c, Birthday__c, Memo__c
            FROM Employees__c
            WHERE Name LIKE :key
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
}
