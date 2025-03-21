//// [tests/cases/compiler/commentsOnStaticMembers.ts] ////

//// [commentsOnStaticMembers.ts]
class test {
    /**
     * p1 comment appears in output
     */
    public static p1: string = "";
    /**
     * p2 comment does not appear in output
     */
    public static p2: string;

    /**
     * p3 comment appears in output
     */
    private static p3: string = "";
    /**
     * p4 comment does not appear in output
     */
    private static p4: string;
}

//// [commentsOnStaticMembers.js]
class test {
    static p1 = "";
    static p2;
    static p3 = "";
    static p4;
}
