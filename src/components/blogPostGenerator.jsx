const fs = require("fs");

const blogPostGenerator = () => {
  const fakeBlogPosts = { posts: [] };

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function getUniqueHeader() {
    const adjectives = [
      "Amazing",
      "Beautiful",
      "Charming",
      "Delightful",
      "Elegant",
      "Fascinating",
      "Gorgeous",
      "Harmonious",
      "Interesting",
      "Joyful",
    ];
    const nouns = [
      "Adventure",
      "Beauty",
      "Charm",
      "Delight",
      "Elegance",
      "Fascination",
      "Gorgeousness",
      "Harmony",
      "Interest",
      "Joy",
    ];
    return `${getRandomElement(adjectives)} ${getRandomElement(nouns)}`;
  }

  function getUniqueEntry() {
    const opening = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ];
    const middle = [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    ];
    const closing = [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam",
    ];
    const fullEntry = `<p>${getRandomElement(
      opening
    )}</p> <p>${getRandomElement(middle)}</p> <p>${getRandomElement(
      closing
    )}</p>`;
    return fullEntry;
  }
  for (let i = 0; i < 100; i++) {
    fakeBlogPosts.posts.push({
      id: i,
      header: `Blog Post #${i} - ${getUniqueHeader()}`,
      entry: `${getUniqueEntry()}`,
    });
  }
  return JSON.stringify(fakeBlogPosts);

  fs.writeFile("blogposts.json", fakeBlogPosts, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};
