import java.util.*;

public class PatternsP2_12 {

    public static void main(){
        Scanner sc  = new Scanner(System.in);
        System.out.print("Enter Row Number : ");
        int n = sc.nextInt();
        
        // // hollow rectangle pattern
        // for(int i = 1; i<n; i++){
        //     for(int  j =1; j<=n; j++){
        //         if(i == 1 || i == n-1 || j == 1 || j==n) {
        //             System.out.print("*");
        //         } else {
        //             System.out.print(" ");
        //         }
        //     }
        //     System.out.println();
        // }

        // // Inverted & Rotated half-pyramid pattern
        // for(int  i =1; i<=n; i++){
        //     for(int j=1; j <=n-i; j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=n-i+1; j <=n; j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }

        // // Inverted halt-pyramid with numbers
        // for(int i = 1; i<=n; i++){
        //     for(int j = 1; j <=n-i+1; j++){
        //         System.out.print(j);
        //     }
        //     System.out.println();
        // }

        // // Floyd's Tringle pattern
        // int count = 1;
        // for(int  i =1; i<=n; i++){
        //     for(int j=1; j <=i; j++){
        //         System.out.print(count + " ");
        //         count++;
        //     }
        //     System.out.println();
        // }
        
        // // 0-1 Triangle pattern
        // for(int  i =1; i<=n; i++){
        //     for(int j=1; j <=i; j++){
        //         if((i+j)%2 == 0){
        //         System.out.print("1");
        //         }
        //         else{
        //             System.out.print("0");
        //         }
        //     }
        //     System.out.println();
        // }

        // // Butterfly pattern
        // for(int i = 1; i<=n; i++){
        //     for(int j = 1; j <= n*2;j++){
        //         if(j<=i || j>n*2-i){
        //             System.out.print("* ");
        //         }else{
        //             System.out.print("  ");
        //         }
        //     }
        //     System.out.println();
        // }
        // for(int i = n; i>=1; i--){
        //     for(int j = 1; j <= n*2;j++){
        //         if(j>i && j<=(n*2)-i){
        //             System.out.print("  ");
        //         }else{
        //             System.out.print("* ");
        //         }
        //     }
        //     System.out.println();
        // }


        // // Solid Phombus pattern
        // for(int i = 1; i<=n; i++){
        //     for(int j = 1; j <= (n*2)-i;j++){
        //         if(j>(n-i)){
        //             System.out.print("* ");
        //         }else{
        //             System.out.print("  ");
        //         }
        //     }
        //     System.out.println();
        // }

        // // Hallow Rhombus pattern
        // for(int i = 1; i<=n; i++){
        //     for(int j = 1; j <= (n*2)-i;j++){
        //         if(j==(n-i)+1 || j==(n*2)-i || (j>(n-i) && i ==1) || i == n){
        //             System.out.print("* ");
        //         }else{
        //             System.out.print("  ");
        //         }
        //     }
        //     System.out.println();
        // }

        // // Diamond pattern
        // for(int i =1; i <=n; i++){
        //     for(int j =1; j<(n+i); j++){
        //         if(j>n-i)
        //             System.out.print("* ");
        //         else{
        //             System.out.print("  ");
        //         }
        //     }
        //     System.out.println();
        // }
        // for(int i =n; i >=1; i--){
        //     for(int j =1; j<=(n+i); j++){
        //         if(j>(n-i)+1)
        //             System.out.print("* ");
        //         else{
        //             System.out.print("  ");
        //         }
        //     }
        //     System.out.println();
        // }


        // // Number pyramid pattern
        // for(int i=1; i <=n; i++){
        //     for(int j=1; j<=(n+i)-1; j++){
        //         if(j>(n-i)){
        //             if((i+j)%2!=0){
        //                 System.out.print(" ");
        //             }else{
        //                 System.out.print(i);
        //             }
        //         }
        //         else{
        //             System.out.print(" ");
        //         }
        //     }
        //     System.out.println();
        // }


        // //Palindromic pattern with number pattern
        // for(int i=1; i <=n; i++){
        //     for(int j=1; j<=(n+i)-1; j++){
        //         if(j>(n-i)){
        //             System.out.print(Math.abs(n-j)+1);
        //         }
        //         else{
        //             System.out.print(" ");
        //         }
        //     }
        //     System.out.println();
        // }
    }
}
