import java.util.ArrayList;
import java.util.List;

class Employee {
    private int id;
    private String name;
    private double salary;

    Employee(int id, String name, double salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    public void displayDetails(){
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("--------------------");
    }

    public static void main(String[] args){
        Employee emp1=new Employee(101, "Adarsh", 50000);
        Employee emp2=new Employee(102, "Amit", 60000);
        Employee emp3=new Employee(103, "Aditya", 55000);
        
        List<Employee> employee=new ArrayList<>();
        employee.add(emp1);
        employee.add(emp2);
        employee.add(emp3);

        //Displaying all employee details
        System.out.println("Employee Details:");
        System.out.println("********************");

        for(Employee emp : employee){
            emp.displayDetails();
        }
    }
}
