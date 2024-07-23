package com.jinhal.emsbackend.mapper;

import org.springframework.stereotype.Component;

import com.jinhal.emsbackend.dto.EmployeeDto;
import com.jinhal.emsbackend.entity.Employee;

@Component
public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstname(),
                employee.getLastname(),
                employee.getEmail()
        );
    }

    public static Employee maptoEmployee(EmployeeDto employeeDto){
    	Long id = employeeDto.getId();
        long employeeId = id != null ? id : 0L; // Use 0L or any other default value if id is null
        return new Employee(
                employeeId,
                employeeDto.getFirstname(),
                employeeDto.getLastname(),
                employeeDto.getEmail()
        );
    }
}
