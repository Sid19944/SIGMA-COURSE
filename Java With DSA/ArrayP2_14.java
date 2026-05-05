import java.util.*;

public class ArrayP2_14 {
    public static void getMaxSum(int nums[]){
        int maxSum = Integer.MIN_VALUE;

        for(int i = 0; i<nums.length; i++){
            for(int j = i; j < nums.length; j++){
                int sum = 0;
                for(int k = i; k<=j; k++){
                    sum += nums[k];
                }
                System.out.print(sum+" ");
                if(sum > maxSum){
                    maxSum = sum;
                }
            }
            System.out.println();
        }
        System.out.print("Max Sum Of SubArrahy : " + maxSum);
    }

    // One More methode
    public static void anotherMethode(int numbers[]){
        int maxSum = Integer.MIN_VALUE;;
        for(int i = 0; i< numbers.length; i++){
            int currSum = 0;
            for(int j = i; j< numbers.length; j++){
                currSum += numbers[j];
                if(currSum>  maxSum){
                    maxSum = currSum;
                }

            }
        }
        System.out.print("Max Sum Of SubArrahy : " + maxSum);
        
    }


    // prefix methode
    public static void prefixOptimizeMethode(int nums[]){
        int maxSum = Integer.MIN_VALUE;
        int prefixSum[] = new int[nums.length];

        prefixSum[0] = nums[0];
        for(int i = 1; i < nums.length; i++){
            prefixSum[i] = prefixSum[i-1]+nums[i];
        }

        for(int i = 0; i<nums.length; i++){
            for(int j = i; j <nums.length; j++){
                int sum = 0;
                sum = i == 0 ? prefixSum[j] : prefixSum[j]-prefixSum[i-1];
                if(maxSum < sum){
                    maxSum = sum;
                }
            }
        }
        System.out.print("Max Sum Of SubArrahy : " + maxSum);
    }

    // more optimize methode to find max sum of subarray
    public static void MoreOptimizeMetho(int nums[]){
        int maxSum = nums[0];
        int currSum = nums[0];

        for(int i = 1; i< nums.length; i++){
            currSum = Math.max(nums[i], nums[i] + currSum );

            maxSum = Math.max(maxSum, currSum);
        }

        System.out.print("Max Sum Of SubArrahy : " + maxSum);
    }

    // Calculate trapped water
    public static void calculateTrappedWater(int nums[]){
        int leftMaxNum[] = new int[nums.length];
        leftMaxNum[0] = nums[0];

        int rightMaxNum[] = new int[nums.length];
        rightMaxNum[nums.length-1] = nums[nums.length-1];
        
        for(int i = 1; i< nums.length; i++){
            leftMaxNum[i] =  Math.max(leftMaxNum[i-1], nums[i]);
            rightMaxNum[nums.length-i-1] = Math.max(rightMaxNum[nums.length-i],nums[nums.length-i-1]);
        }

        int trapWater = 0;
        for(int i = 0; i< nums.length; i++){
            int min = Math.min(leftMaxNum[i], rightMaxNum[i]);
            trapWater += min-nums[i];
        }

        System.out.print("Water can contain : "+trapWater);
    }
    // Optimize way Calculate trapped water in time= 0(n) and space 0(1)
    public static void optimizeWayCalculateTrapWater(int[] nums){
        int left = 0;
        int right = nums.length-1;
        int leftMax = 0;
        int rightMax = 0;
        int water = 0;

        while (left < right) {
            if(nums[left]<=nums[right]){
                if(nums[left] >= leftMax){
                    leftMax = nums[left];
                }else{
                    water += leftMax- nums[left];
                }
                left++;
            }else{
                if(nums[right] >= rightMax){
                    rightMax = nums[right];
                }else{
                    water += rightMax-nums[right];
                }
                right--;
            }
        }
        System.out.print("Water can contain : "+water);
    }


    // calculate maxProfit from stock market
    public static void calculateMaxProfit(int[] prices){
        int buyPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        int sellValue = 0;

        for(int i = 0; i < prices.length; i++){
            if(buyPrice < prices[i]){
                int profit = prices[i]-buyPrice;
                maxProfit = Math.max(maxProfit, profit);
                sellValue = Math.max(prices[i],sellValue);
            }else{
                buyPrice = prices[i];
            }
        }

        System.out.print("When you buy on price  : " + buyPrice + " and selling price : " + sellValue +" Gives you max profit will be : "+ maxProfit);
    }


    // Practice Questoins
    // 1.
    public static void isNumTwice(int[] nums){
        for(int i = 0; i< nums.length; i++){
            for(int j = 0; j< nums.length; j++){
                if(i != j && nums[i] == nums[j]){
                    System.out.print("At lest One Number come twice");
                    return;
                }
            }
        }
        System.out.print("Any Number is not come twice");
    }

    public static void isNumTwiceSortFirst(int[] nums){
        Arrays.sort(nums);

        for(int i = 0; i< nums.length-1; i++){
            if(nums[i] == nums[i+1]){
                System.out.print("At lest One Number come twice");
                return;
            }
        }
        System.out.print("Any Number is not come twice");
    }

    public static void hashSetMethode(int[] nums){
        HashSet<Integer> seen = new HashSet<>();

        for(int num : nums){
            if(!seen.add(num)){
                System.out.print("At lest One Number come twice");
                return;
            }
        }
        System.out.print("Any Number is not come twice");
    }

    

    // 2. There is an integer array nums sorted in ascending order (with distinct values).Prior to being passed to your function, nums is possibly rotated at an unknown pivot  index k (1  <=  k  <  nums.length)  such  that  the  resulting  array  is [nums[k], nums[k+1],   ...,   nums[n-1], nums[0],   nums[1],   ...,   nums[k-1]] (0-indexed).   For   example, [0,1,2,4,5,6,7] might        be        rotated        at        pivot        index 3   and become [4,5,6,7,0,1,2].Given the array nums after the possible rotation and an integer target, returnthe index oftarget if it is in nums, or -1   if it is not in nums.You must write an algorithm with O(log n) runtime complexity.
    // Example 1:Input:nums = [4,  5, 6, 7, 0, 1, 2], target = 0 Output:   4
    // Example 2:Input:nums = [4,  5, 6, 7, 0, 1, 2], target = 3 Output:   -1
    public static int rotateAndfind(int[] nums, int target){
        int minIdx  = minSearch(nums);

        if(nums[minIdx] <= target && nums[nums.length-1] >= target){
            return search(nums, minIdx, nums.length-1, target);
        }else{
            return search(nums, 0, minIdx-1, target);
        }
    }
    public static int search(int[] nums, int left, int right, int target){
        int l = left;
        int r = right;

        while (l<=r) {
            int mid = (l+r)/2;
            if(nums[mid] == target){
                return mid;
            }else if( nums[mid] > target){
                r = mid-1;
            }else{
                l= mid+1;
            }
        }

        return -1;
    }
    public static int minSearch(int[] nums){
        int left = 0;
        int right = nums.length-1;

        while(left < right){
            int mid = (left + right)/2;
            if(mid > 0 && nums[mid-1] > nums[mid]){
                return mid;
            }else if(nums[mid] >= nums[left] && nums[mid] > nums[right]){
                left = mid + 1;
            }else{
                right = mid -1;
            }
        }
        return left;
    }




    // 3.
    public static void findMaxProfit(int[] nums){
        int currBuyPrice = Integer.MAX_VALUE;
        // int currSellPrice = Integer.MIN_VALUE;
        int maxProfit = 0;

        for(int i = 0; i < nums.length; i++){
            currBuyPrice = Math.min(currBuyPrice, nums[i]);
            if(currBuyPrice < nums[i]){
                maxProfit = Math.max(maxProfit, nums[i] - currBuyPrice);
            }
        }

        System.out.print("Max Profit : "+maxProfit);
    }


    // 4.
    public static void findWaterTrap(int[] nums){
        int[] leftMax = new int[nums.length];
        leftMax[0] = nums[0];
        int[] rightMax = new int[nums.length];
        rightMax[nums.length-1]= nums[nums.length-1];

        for(int i = 1; i < nums.length; i++){
            leftMax[i] = Math.max(leftMax[i-1], nums[i]);
            rightMax[nums.length-i-1] = Math.max(rightMax[nums.length-i], nums[nums.length-i-1]);
        }

        int water = 0;
        for(int i = 0; i < nums.length; i++){
            int min = Math.min(leftMax[i], rightMax[i]);
            water += min - nums[i];
        }

        System.out.print(water);
    }

    public static void optimizeVersion(int[] nums){
        int l = 0;
        int r = nums.length -1;
        int lm = 0;
        int rm = 0;
        int water = 0;

        while(l<r){
            if(nums[l] <= nums[r]){
                if(nums[l] >= lm){
                    lm = nums[l];
                }else{
                    water += lm-nums[l];
                }
                l++;
            }else{
                if(nums[r] >= rm){
                    rm = nums[r];
                }else{
                    water += rm-nums[r];
                }
                r--;
            }
        }
        System.out.print(water);
    }


    // 5. 
    public static void tripleSub(int[] nums){
        for(int i = 0; i <nums.length; i++){
            for(int j = i+1; j < nums.length; j++){
                for(int k = i+2; k < nums.length; k++){
                    int sum = 0;
                    if(nums[i]+nums[j]+nums[k] == 0){
                        System.out.print("(" + nums[i]+" " +nums[j]+" "+nums[k] +" )");
                    }
                }
            }
        }

    }



    // [0,1,2,4,5,6,7] become [4,5,6,7,0,1,2]
    // public static void rotateInIdx(int[] nums, int target){
    //     int n = nums.length -1;
    //     if(n == 0 || target == 0) return;

    //     if(target > n) {
    //         System.out.print("Target Index must be less then " + n );
    //         return;
    //     };

    //     reverse(nums, 0, n);
    //     reverse(nums, 0, target);
    //     reverse(nums, target + 1, n);

    //     for(int num : nums){
    //         System.out.print(num);
    //     }
    // }
    // public static void reverse(int[] nums, int left, int right){
    //     while (left < right) {
    //         int temp = nums[left];
    //         nums[left] = nums[right];
    //         nums[right] = temp;
    //         left++;
    //         right--;
    //     }
    // }


    public static void main(){
        // // brout force method O(n3) time complexy
        // int numbers[] = {1,-2,6,-1,3};
        // getMaxSum(numbers);
        // anotherMethode(numbers);


        // // prefix methode, optimize methode
        // int numbers[] = {1,-2,6,-1,3};
        // prefixOptimizeMethode(numbers);

        // // more optimize methode to find max sum of subarray
        // int numbers[] = {1,-2,6,-1,3};
        // MoreOptimizeMetho(numbers);


        // Trapping RainWater
        // int numbers[] = {4,2,0,6,3,2,5};
        // calculateTrappedWater(numbers);
        // optimizeWayCalculateTrapWater(numbers);

        
        // int[] prices = {7,1,5,3,9,6,4};
        // calculateMaxProfit(prices);



        // Practice Questions
        // 1. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
        // int[] nums = {1, 2, 3,4,5,6,7};
        // isNumTwice(nums);
        // isNumTwiceSortFirst(nums);
        // hashSetMethode(nums);


        // 2.
        // Binary search
        // int[] nums = {011234567};
        // rotateInIdx(nums)
        // System.out.print("Index : " + rotateAndfind(nums, 0)); // binary search


        // 3. You  are  given  an  array prices where prices[i] is  the  price  of  a  given  stock  on  the ith day.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
        // int[] numbers = {7, 1, 5, 3, 6,  4};
        // findMaxProfit(numbers);


        // 4. Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. height = [0, 1, 0,  2, 1, 0, 1, 3, 2, 1, 2, 1] output : 6
        // int[] numbers = {4, 2, 0, 3, 2, 5};
        // optimizeVersion(numbers);


        // 5.  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets
        int[] numbers = {-1, 0, 1, 2, -1, -4};
        tripleSub(numbers);




        

        

       

    }
}
