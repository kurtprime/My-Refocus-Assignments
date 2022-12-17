static Scanner input = new Scanner(System.in);

    public static void main(String[] args) {

        double itemOne, itemTwo, itemThree, totalN;
        double item1 = 15, item2 = 2000, item3 = 50, item4 = 10, item5 = 15, item6 = 2500;

        System.out.println("");
        System.out.println("\t\tWelcome!");

        System.out.print("\n\nEnter your name : ");
        String name = input.next();

        System.out.print("Enter your Address : ");
        String address = input.next();

        System.out.println("");
        System.out.print("\nSelect Item No. 1 : ");
        let SelItem1 = input.nextInt();
        itemOne = SelItem1;

        if (SelItem1 == 1) {
            System.out.println("Item   :   Pen");
            System.out.println("Price  :   Php  + 15.00");
            itemOne = item1;

        } else if (SelItem1 == 2) {
            System.out.println("Item   :   Bag");
            System.out.println("Price  :   Php 2000.00");
            itemOne = item2;

        } else if (SelItem1 == 3) {
            System.out.println("Item   :   Notebook");
            System.out.println("Price  :   Php 50.00");
            itemOne = item3
        }