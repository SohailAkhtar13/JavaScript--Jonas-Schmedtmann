const Mark=
{
    fullName : "Mark Miller",
    mass:78,
    height:1.69,
    calcBMI : function(){
        this.bmi=this.mass/this.height**2
        return this.bmi;
    }
};                                         

const John=
{
    fullName: "John Smith",
    mass:92,
    height:1.95,
    calcBMI: function(){
        this.bmi=this.mass/this.height**2
        return this.bmi;
}
};
 Mark.calcBMI();
 John.calcBMI();
 console.log(Mark.bmi,John.bmi);

 if (Mark.bmi>John.bmi)
 {
    console.log(`${Mark.fullName}'s BMI (${Mark.bmi}) is higher than${John.fullName}'s BMI (${John.bmi})`)
 }
 else
 {
    console.log(`${Mark.fullName}'s BMI (${Mark.bmi}) is lower than${John.fullName}'s BMI (${John.bmi})`)
 }
