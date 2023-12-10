const capitalize = (name = 'arya') => {
  return name.replace(name[0], name.slice(0,1).toUpperCase());
};
console.log(capitalize('maxim'));
