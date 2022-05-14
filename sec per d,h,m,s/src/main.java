public class main {

    public static void main(String[] args){

        int seconds = 600000;
        int days = seconds/86400;
        int hours = ((seconds%86400)/3600);
        int minutes = (seconds%3600)/60;
        int leftSeconds = seconds%60;

        System.out.println("Start seconds: " + seconds);
        System.out.println("Days: " + days);
        System.out.println("Hours: " + hours);
        System.out.println("Minutes: " + minutes);
        System.out.println("Left seconds: " + leftSeconds);


    }


}
