let text = document.getElementById("text");
let number = document.getElementById("number");
let button = document.getElementById("button");

function lorem(p) {
  this.p = p;
}

var lorems = [
  new lorem(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse. Donec enim diam vulputate ut pharetra sit amet aliquam id. Amet risus nullam eget felis. Pellentesque dignissim enim sit amet venenatis urna. Scelerisque varius morbi enim nunc faucibus a pellentesque. Arcu non sodales neque sodales. Diam volutpat commodo sed egestas egestas fringilla. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Consequat semper viverra nam libero justo laoreet sit. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Amet porttitor eget dolor morbi non arcu risus quis varius. Tristique nulla aliquet enim tortor at auctor urna nunc. Metus aliquam eleifend mi in nulla posuere."
  ),
  new lorem(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium. Aliquam id diam maecenas ultricies. Dictum fusce ut placerat orci nulla. Tortor at risus viverra adipiscing at in. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sed augue lacus viverra vitae congue. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Id interdum velit laoreet id. Posuere lorem ipsum dolor sit amet. Est placerat in egestas erat. Vitae elementum curabitur vitae nunc sed velit dignissim. Adipiscing vitae proin sagittis nisl rhoncus mattis."
  ),
  new lorem(
    "Lorem ipsum dolor sit amet. Eum blanditiis laboriosam qui eius enim qui vero rerum 33 dolor molestias aut fuga animi ut quia placeat et culpa nemo. Et provident dolor qui nesciunt tempore 33 beatae labore non dolore maxime hic neque nostrum et dicta animi. Hic vitae quam aut pariatur provident id perspiciatis reprehenderit."
  ),
  new lorem(
    "Et dolorem quidem aut maxime quia et numquam temporibus? Et reprehenderit dolor aut amet autem ad possimus eligendi et ipsum nemo."
  ),
  new lorem(
    "Eos unde asperiores aut eius nobis non perspiciatis nostrum. Ex possimus galisum eos doloribus atque et libero internos id illum repellat et amet dicta At nisi perspiciatis 33 odio galisum. Vel libero perspiciatis non earum eveniet est quod eligendi."
  ),
  new lorem(
    "Lorem ipsum dolor sit amet. Aut amet et dolore quaerat non omnis eius vel consequuntur voluptatem et consequatur explicabo est labore consequatur ea omnis dicta. Qui sunt voluptatum sed atque corporis eum rerum veritatis vel blanditiis aspernatur et facilis rerum eos quaerat sequi."
  ),
  new lorem(
    "Sed mollitia quia qui quasi ex aspernatur quia. Sed nesciunt consequuntur qui voluptates veritatis in consequuntur eaque et explicabo obcaecati ex internos laboriosam."
  ),
  new lorem(
    "Lorem ipsum dolor sit amet. Et nobis molestiae in internos saepe At reiciendis autem eos quia doloremque quo placeat quia. Aut omnis autem et quidem similique vel rerum maxime et quidem dolor ut nemo tenetur et optio voluptatem. Id optio dignissimos qui magnam quia ut modi dolores ut consectetur dignissimos?"
  ),
  new lorem(
    "Qui quam illum qui consequuntur doloremque et doloremque magni vel atque natus. Aut quas consequatur et possimus error rem illo nesciunt et quidem consequuntur non quod sint qui rerum molestiae! Hic facere sequi et possimus tempora aut quos ipsam."
  ),
  new lorem(
    "Lorem ipsum dolor sit amet. Id consequatur dolor non galisum tenetur et ratione aspernatur aut itaque consequuntur eos blanditiis debitis non sequi possimus. Et adipisci voluptatibus est adipisci aspernatur est commodi voluptatem qui quam fuga et iusto unde et asperiores architecto. Quo iusto galisum qui suscipit quia eos molestias impedit sed expedita aspernatur ex quia iusto ut exercitationem repellendus sed Quis blanditiis. Quo enim atque est aspernatur galisum non iste debitis in officia impedit et quisquam reprehenderit ex officia sint."
  ),
];

button.addEventListener("click", () => {
  text.innerHTML = "";
  let lorem = "";
  let random;
  let numbervalue = number.value;
  for (let i = 0; i < numbervalue; i++) {
    random = (Math.random() * 10).toFixed();
    lorem = `${lorem}<br><br>${lorems[random].p}`;
  }
  text.insertAdjacentHTML("beforeend", lorem);
});
