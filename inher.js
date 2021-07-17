class wtc {
    constructor(teams,place ) {
        this.teams = teams;
        this.place = place;
           

    }
    Intro() {
        console.log("the wtc  " + this.teams + ' in ' + this.place)
    }
}


class test extends wtc {
    constructor(teams, place) {
        super(teams, place)
    }
    Intro1() {
        console.log("The test " + this.teams + ' in' + this.place)
    }
}

class odi extends wtc {
    constructor(teams, place) {
        super(teams, place)
        
    }
    Intro2() {
        console.log("The odi " + this.teams + ' in' + this.place)
    }
}

const a = new wtc("ind vs NZ ", "England");
a.Intro()

const b = new test("aus vs eng", "Austraila")
b.Intro1()

const c = new odi("SA vs WI", "west indies")
c.Intro2()