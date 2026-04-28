import java.util.*;

public class ArrayP1_13 {

    // public static void update(int marks[]){
    //     for(int i = 0; i < marks.length; i++){
    //         marks[i] = marks[i]+1;
    //     }
    // }


    // public static int linearSearch(int num[],int val){
    //     for(int i = 0; i < num.length; i++){
    //         if(num[i] == val) return i;
    //     }
    //     return -1;
    // }


    // public static void checkMenu(String menu[], String order){
    //     for(int i = 0; i < menu.length; i++){
    //         if(menu[i] == order) {
    //             System.out.print(order + " In index of : " + i);
    //             return;
    //         }
    //     }
    //     System.out.print(order + " Not in Menu");
    // }

    // public static void getLargest(int nums[]){
    //     int largest = Integer.MIN_VALUE;    // - infinity
    //     int smallest = Integer.MAX_VALUE;   // + infinity
    //     for(int i = 0; i<nums.length; i++){
    //         if(nums[i]>largest){
    //             largest = nums[i];
    //         }
    //         if(nums[i]<smallest){
    //             smallest = nums[i];
    //         }
    //     }
    //     System.out.println("Largest number in this arrary is : " + largest);
    //     System.out.println("Smallest number in this arrary is : " + smallest);
    // }


    // public static void binarySearh(int nums[],int val){
    //     int start = 0;
    //     int end = nums.length-1;
        
    //     while (start <= end) {
    //         int mid = (start + end)/2;
    //         if(nums[mid] == val){
    //             System.out.print("Index of " + val + " is : " + start);
    //             return;
    //         }
    //         if(nums[mid]>val){
    //             end = mid-1;
    //         }
    //         if(nums[mid] < val){
    //             start = mid+1;
    //         }
    //     }
    //     System.out.print("Value Not Found");
    // }


    // public static void reverArr(int nums[]){
    //     int start = 0;
    //     int end = nums.length-1;

    //     while (start < end) {
    //         int tem = nums[start];
    //         nums[start]=nums[end];
    //         nums[end] = tem;
    //         start++;
    //         end--;
    //     } 
    // }

    // public static void pairArr(int nums[]){
    //     for(int i = 0; i < nums.length; i++){
    //          for(int j = i+1; j < nums.length; j++){
    //             System.out.print("(" +nums[i] +","+ nums[j] + ") ");
    //          }
    //          System.out.println();
    //     }
    // }


    public static void pairSubArr(int nums[]){
        for(int i = 0; i< nums.length; i++){
            for(int j = i; j < nums.length; j++){
                System.out.print("(");
                int sum = 0;
                for(int k = i; k <= j; k++){
                    sum+=nums[k];
                    System.out.print(" "+nums[k]+" ");
                }
                System.out.print(") => sum : " + sum + ",");
            }
            System.out.println();   
        }
    }
        

    // for(int i = 0; i<nums.length; i++){
            
    //     }

    public static void main(){
        // int mark[] = {97,98,99};
        // update(mark);
        // for(int i = 0; i < mark.length; i++){
        //     System.out.println(mark[i]);
        // }


        // int number[] = {1,23,4,5,6,7,8,9,12,34,56,10};
        // int index = linearSearch(number, 8);
        // if(index == -1){
        //     System.out.print("Not Found");
        // }else{
        //     System.out.print("Index of value : " + index);
        // }


        // String menu[] = {"Chole","Samosa","Chai"};
        // checkMenu(menu, "Chai");


        // int numbers[] = {1,2,-3,4,5,6,7,8,19,29,30,1,2,34,56,34,21,1};
        // getLargest(numbers);


        // binary search
        // int numbers[] = {1,2,4,6,12,13,14,15,18,30};
        // binarySearh(numbers,182);

        
        // reverse array
        // int numbers[] = {1,2,3,4};
        // reverArr(numbers);
        // for(int i = 0; i < numbers.length; i++){
        //     System.out.print(numbers[i]+",");
        // }


        // // Pair of subArr
        // int numbers[] = {1,2,3,4,5};
        // pairArr(numbers);


        int numbers[] = {2,4,6,8,9};
        pairSubArr(numbers);

        
        
    }
}
