
/* make this code nicer by changing the if block into a switch block */

enum Weekdays {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

int
main(int argc, char** argv)
{
    int day = TUESDAY;

    if (day == MONDAY) printf("monday");
    else if (day == TUESDAY) printf("tuesday");
    else if (day == WEDNESDAY) printf("wednesday");
    else if (day == THURSDAY) printf("thursday");
    else if (day == FRIDAY) printf("friday");
    else if (day == SATURDAY) printf("saturday");
    else if (day == SUNDAY) printf("sunday");
    return 0;
}

