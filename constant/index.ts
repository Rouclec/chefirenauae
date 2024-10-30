import { Mail, Phone } from "lucide-react";

export const data = {
  tags: [
    "Trending", "Grills", "Pies", "Soups", "Breads", "Desserts", "Drinks", "Appetizers"
  ],
  menu: [
    {
      img: "/food1.svg",
      name: "Pelmeni Salmon fish",
      price: "AED 34",
    },
    {
      img: "/food2.svg",
      name: "Pelmeni Salmon fish",
      price: "AED 48",
    },
    {
      img: "/food3.svg",
      name: "Pelmeni Salmon fish",
      price: "AED 29",
    },
    {
      img: "/food4.svg",
      name: "Pelmeni Salmon fish",
      price: "AED 82",
    }
  ],
  aboutUs: [
    {
      h1: "Every Flavor Tells a Story",
      p1: "Welcome to chef Irina’s kitchen where we bring the best of culinary experiences right to your doorstep. Our mission is to simply provide our customers with exceptional food and service that exceeds their expectations every time.",
      p2: "Our highly trained professional chefs aim to make every experience delicious and heavenly by curating dishes with utmost care."
    }
  ],
  ourService: [
    {
      h1: "Our Services",
      h3: "Reach out to us for your every need",
      h2: "Event catering",
      p: "When it comes to hosting memorable events, Chef Irina Restaurant is your perfect partner. We provide top-notch catering services for any occasion, ensuring that your guests are treated to an enchanting parade of global flavors that leave a lasting impression."
    }
  ],
  taste: {
    h1: "A different taste",
    p: "You will love the taste. Give a try !",
    img: ["/food5.png", "/food6.png", "/food7.png", "/food8.png", "/food9.png", "/food10.png", "/food11.png", "/food12.png"]
  },
  importantLinks: [{ link: "Home", route: "/" }, { link: "About us", route: "/about" }, { link: "Catering", route: "/catering" }, { link: "Career", route: "/career" }, { link: "Contact us", route: "/contact-us" }],
  contacts: [{
    email: { icon: Mail, email: "order@chef-irina.com" },
    phone: { icon: Phone, phone: "+971 04 091 1133" },
    whatsapp: { icon: Phone, phone: "+971 54 823 2323" },
  }],
}
