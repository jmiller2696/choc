      $(document).ready(function () {
        let chocs = [
          {
            chocName: "Plain Milk",
            description: "Smooth milk chocolate",
            calories: 90,
            ingredients: "Cocoa butter, Milk, Cream",
            img: "assets/plain_milk.jpg",
          },
          {
            chocName: "Plain Dark",
            description: "Dark chocolate",
            calories: 90,
            ingredients: "Cocoa butter, Milk, Cream",
            img: "assets/plain_dark.jpg",
          },
          {
            chocName: "Bailey's Cup",
            description: "Dark chocolate with Bailey's Cream Filling",
            calories: 100,
            ingredients: "Cocoa butter, Milk, Cream, baileys",
            img: "assets/baileys_cup.jpg",
          },
          {
            chocName: "Cappuccino Cup",
            description:
              "Dark chocolate with Cappuccino style cream filling",
            calories: 120,
            ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
            img: "assets/cappuccino_cup.jpg",
          },
          {
            chocName: "Nutter Butter",
            description: "Dark chocolate with peanut butter",
            calories: 190,
            ingredients: "Cocoa butter, Milk, Cream, peanut butter",
            img: "assets/nutter_butter.jpg",
          },
          {
            chocName: "Orange Fondant",
            description: "Dark chocolate folded with orange fondant",
            calories: 90,
            ingredients:
              "Cocoa butter, Milk, Cream, orange peel, orange fondant",
            img: "assets/orange_fondant.jpg",
          },
          {
            chocName: "Pistachio Cup",
            description: "Dark chocolate with nuggets of pistachio",
            calories: 90,
            ingredients:
              "Cocoa butter, Milk, Cream, chunks of pistachio nut",
            img: "assets/pistachio_diamond.jpg",
          },
          {
            chocName: "Rum Barrel",
            description: "Dark chocolate with a decadent rum filling",
            calories: 90,
            ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavorings",
            img: "assets/rum_barrel.jpg",
          },
          {
            chocName: "Toffee Crunch",
            description: "Dark chocolate with brittle toffee candy",
            calories: 90,
            ingredients: "Cocoa butter, Milk, Cream, toffee",
            img: "assets/toffee_crunch.jpg",
          },
          {
            chocName: "Plain Supreme",
            description: "Dark chocolate with slivers of milk chocolate",
            calories: 90,
            ingredients: "Cocoa butter, Milk, Cream",
            img: "assets/plain_hybrid.jpg",
          },
        ];

        chocs.forEach((choc, index) => {
          $("#chocolateWrapper").append(`
            <div class="box" id="box${index}">
              <img src="${choc.img}" />
              <p>${choc.chocName}</p>
              <p class="hidden">
                Description: ${choc.description} | Calories: ${choc.calories} |
                Ingredients: ${choc.ingredients}
              </p>
            </div>
          `);
        });


        let infoVisible = false;
        $("#toggleInfoButton").click(function () {
            if (infoVisible) {
              $(".hidden").hide();
              $("#toggleInfoButton").text("Show Info");
              infoVisible = false; 
            } else {
              $(".hidden").show(); 
              $("#toggleInfoButton").text("Hide Info"); 
              infoVisible = true; 
            }
          });
        

        // Highlight random chocolate
        $("#randomSampleButton").click(function () {
          $(".box").css("background-color", "#fffdd0");
          const randomIndex = Math.floor(Math.random() * 10);
          $(`#box${randomIndex}`).css("background-color", "yellow");
          const randomCode = Math.floor(Math.random() * 50) + 1;
          alert(`Your free sample code is: ${randomCode}. Please show this to the cashier!`);
        });
      });