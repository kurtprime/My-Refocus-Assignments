import java.util.Scanner; 

public class Main 

{ 

public static void main(String[] args){ 

Scanner input = new Scanner(System.in); 

String prod1="pencil", prod2="notebook", prod3="eraser"; 

int pencil=20, notebook=40, eraser=10; 

int total; 

int item1; 

int again=1; 

total=0; 

 

System.out.println("1.  " + prod1 + " 20.00 "); 

System.out.println("2.  " + prod2 + " 40.00 "); 

System.out.println("3.  " + prod3 + " 10.00"); 

 

do{ 



    System.out.print("Enter Item Code: "); 

    item1 = input.nextInt(); 

    System.out.print("Enter Quantity: "); 

    int quant = input.nextInt(); 

    if(item1==1){ 

    System.out.print("Description: \n " + prod1); 

    total = (pencilquant); 

}else if(item1==2){ 

System.out.print("Description: \n" + prod2); 

    total = (notebookquant); 

}else if(item1==3){ 

    System.out.print("Description: \n " + prod3); 

    total =(eraser*quant); 

}else{ 

    System.out.println("Invalid Code!"); 

} 
System.out.print("\nEnter Cash Tendered: "); 

int cash = input.nextInt(); 

System.out.print("\nQuantity: " + quant); 

System.out.print("Description: " + item1); 

System.out.print("\nYour Total Amount is:" + total); 

 

 

int change = (cash - total); 

System.out.print("\nYour Change is: " + change); 

{ 

System.out.print("\nDo you want to buy again? 1 for YES 2 for NO: "); 

again = input.nextInt(); 

} 

}while(again==1); 

System.out.print("Thank you for using calculator"); 

if(again==2); 

 

 

 

} 

}