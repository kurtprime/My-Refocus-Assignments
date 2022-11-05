import java.util.Scanner;
public class SyncAct5 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int username;
        int password;

        System.out.println("Login");

        System.out.println("Username:");
        username = sc.nextInt();

        System.out.println("Password:");
        password = sc.nextInt();

       if(username== 1230 && password==456789){
        System.out.println("Login Successful!");
    }
       else 
       if(username!= 1230 && password== 456789){
        System.out.println("Username is incorrect");

       }
       else 
       if(username== 1230 && password!=456789){
        System.out.println("Password is incorrect");


    }
    else
       if(username!= 1230 && password!=456789){
       System.out.println("Login Failed!");

       sc.close();

       }
    }
}