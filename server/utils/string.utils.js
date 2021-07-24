const getExtension = (name) => (name ? name.split('.').pop() : '');

export default getExtension;
