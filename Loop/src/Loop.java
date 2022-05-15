import java.util.Arrays;

public class Loop {

    public static void main(String[] args) {

        int[] nums = new int[900];
        int[] nums2 = new int[nums.length];

        for (int i = 0; i < nums.length; i++){

            nums[i] = i + 100;
            System.out.println(nums[i]);

        }

        System.out.println("");

        for (int i = 0, j = nums.length - 1; i < nums.length; i++, j--){

            nums2[i] = nums[j];

        }
        for (int a : nums2){

            System.out.println(a);

        }




    }



        }





