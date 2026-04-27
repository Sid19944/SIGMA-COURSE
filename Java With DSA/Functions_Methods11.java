import java.util.*;

public class Functions_Methods11 {
    public static void printHellow(){
        System.out.println("Hello World");
    }

    public static void swap(int a, int b){
        int tem= a;
        a = b;
        b = tem;
        System.out.println("a = " +a);
        System.out.println("b = "+b);
    }

    public static int factorialOfN(int n){
        int fact = 1;
        for(int i = 1; i <=n; i++){
            fact *= i;
        }
        return fact;
    }




    // Function overloading
    public static int multiply(int a, int b){
        return a * b;
    }
    public static float multiply(float a, float b){
        return a * b;
    }
    public static int multiply(int a, int b,int c){
        return a * b*c;
    }
    // Function overloading

    // Number prime or not
    // public static boolean isPrime(int n){
    //     for(int i =2; i<n; i++){
    //         if(n%i==0){
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // optimize one to calculate isPrime
    public static boolean isPrime(int n ){
        for(int i =2; i<=Math.sqrt(n); i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
    // Number prime or not

    // Print all Primes in a Range
    public static void printPrimes(int n){
        for(int i =2 ; i<=n; i++){
            if(isPrime(i)){
                System.out.print(i+" ");
            }
        }
    }
    // Print all Primes in a Range



    // Binary to Decimal
    public static void binaryToDecimal(int n){
        int or = n;
        int pow = 0;
        int Decimal = 0;

        while (n>0){
            if( n%10 != 1 && n%10 != 0) {
                System.err.print("Invalid Input, Enter only 0 OR 1");
                return;
            }
            Decimal += (n%10)*Math.pow(2, pow);
            pow++;
            n = n/10;
        }
        
        System.out.print("Decimal of "+or+" = "+ Decimal);
    }
    // Binary to Decimal

    // Decimal to Binary
    public static void DecimalToBinary(int n){
        int or = n;
        int binary = 0;
        int pow = 0;

        while (n>0) {
            binary = binary+((n%2)*(int)Math.pow(10,pow));
            pow++;
            n /=2;
        }
    
        System.out.print("Binary of "+or+" = "+ binary);
    }
    // Decimal to Binary



    // Practice Questions
    // 1 Write a Java method to compute the average of three numbers?
    public static void CalAvgOfThree(int a, int b, int c){
        System.err.println((a+b+c)/3);
    }

    // 2 Write a method named isEven that accepts an int argument. The method should return true if the argument id even, or false otherwise. Also write a program to test your method.
    public static boolean isEven(int n){
        if(n%2==0){
            return true;
        }
        return false;
    }

    // 3 Write a Java program to check if a number is a palindrome in Java? ( 121 is a palindrome, 321 is not )
    public static boolean isPalindrome(int n){
        int ori = n;
        int rev = 0;

        while (n>0) {
            rev = (rev*10)+(n%10);
            n = n/10;
        }
        
        if(ori == rev){
            return true;
        }
        return false;
    }

    // 5 Write a Java method to compute the sum of the digits in an integer?
    public static int sumOfNumber(int n) {
        int sumOfDigit = 0;
        while (n>0) {
            sumOfDigit += (n%10);
            n/=10;
        }

        return sumOfDigit;
    }


    public static void main(){

        // int a = 10;

        // int b =40;

        // swap(a, b);

        // System.out.print(factorialOfN(5));

        // System.out.print(multiply(2,2,3));

        // System.out.print(isPrime(3949345));

        // printPrimes(100);

        // binaryToDecimal(101);

        // DecimalToBinary(5);

        // bolck scope
        // {
        //     int a = 10;
        // }
        // bolck scope


        // Practice Question
        // 1
        // CalAvgOfThree(20, 7, 3);

        // 2
        // if(isEven(6)){
        //     System.out.print("Number is Even");
        // }else{
        //     System.out.print("Number is Odd");
        // }

        // 3
        // System.out.print(isPalindrome(12341));

        // 4 Use of following method of the Math class in Java.
        // System.out.print(Math.min(10,20));   // 10
        // System.out.print(Math.max(10,20));   // 20
        // System.out.print(Math.sqrt(9));      // 3
        // System.out.print(Math.pow(10,2));    // 100
        // System.out.print(Math.abs(-10));     // 10

        // 5
        // System.out.print(sumOfNumber(12345)); // 15
    }
}
