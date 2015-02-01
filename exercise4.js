var cat = 
{
        tiredness: 20,
        hunger: 20,
        loneliness: 3,
        happiness: 15,
        obedience: -50,
        
        status: function()
        {
            for (var i in this)
            {
                if (typeof this[i] == "number") 
                {
                    console.log( i + ":" + this[i]);
                }
            }
        },

    
        feed: function () 
        {
            console.log("Om nom nom")
            this.hunger = this.hunger - 5;
            this.obedience = this.obedience + 200;
            this.status(); 
        },


        play: function()
        {
            console.log("Meow")
            this.tiredness = this.tiredness + 10;
            this.happiness = this.happiness + 10;
            this.loneliness = this.loneliness - 1;
            this.hunger = this.hunger + 2;
            this.status();
        },

        sleep: function()
        {
            console.log("ZzzZz")
            this.tiredness = this.tiredness - 10;
            this.happiness = this.happiness + 5;
            this.status();
        },

        pet: function()
        {
            console.log("Purr")
            this.happiness = this.happiness + 10;
            this.obedience = this.obedience + 100;
            this.status();
        },

        tease: function()
        {
            console.log("GRRRRRRRR");
            this.happiness = this.happiness - 50;
            this.obedience = this.obedience - 100;
            this.status();
        },



}; 
