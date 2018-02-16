const loremIpsum = 'Lorem ipsum dolor Sit amet lobortis arcu amet a Dignissim eros est Litora ac rhoncus Malesuada augue quam Elit molestie vel luctus ipsum lorem Hendrerit magnis sagittis Eget hac proin tempor est elementum Et sit commodo pulvinar pellentesque commodo Ut eget mauris libero phasellus augue ut diamlorem lacinia Id mauris id et sociis lorem In faucibus porta integer ut montes Mi integer enim proin cursus eget in ligula magna id in consectetuer suspendisse fringilla eget iaculis elementum integer Leo arcu ultricies mattis eu dis condimentum dictumst amet Neque velit eros';

function generateField(minLength, randomCoefficient, endSymbol = '') {
  const loremIpsumArray = loremIpsum.split(' ');
  const loremIpsumArrayLength = loremIpsumArray.length;
  const issueTitleLength = minLength + Number.parseInt(Math.random() * randomCoefficient, 10);
  let issueTitle = `${loremIpsumArray[Number.parseInt(Math.random() * loremIpsumArrayLength, 10)]}`;
  for (let i = 0; i < issueTitleLength - 1; i += 1) {
    issueTitle = `${issueTitle} ${loremIpsumArray[Number.parseInt(Math.random() * loremIpsumArrayLength, 10)]}`;
  }
  return `${issueTitle[0].toUpperCase()}${issueTitle.substr(1).toLowerCase()}${endSymbol}`;
}

const generateIssue = () => ({
  id: 242210000 + new Date().getMilliseconds() + Number.parseInt((Math.random() * 1000), 10),
  title: generateField(3, 15, '?'),
  body: generateField(40, 40, '.'),
  state: 'open',
});

const generateService = {
  generateField,
  generateIssue,
};
export default generateService;
