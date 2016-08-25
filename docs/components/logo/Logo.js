import React, { PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./logo.scss');
}

const Logo = () => (
  <div className="ax-logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="143"><path fill="#F2F2F2" d="M0 0h120v143H0z"/><circle cx="75.9" cy="56.2" r="6.4" fill="#FF8F00"/><circle cx="57.4" cy="59.7" r="9.8" fill="#F46B00"/><circle cx="73.5" cy="72.5" r="8.2" fill="#FF586F"/><circle cx="95.1" cy="64.2" r="5.3" fill="#8EA53C"/><circle cx="47.3" cy="78.6" r="4.6" fill="#F6BE00"/><circle cx="66.7" cy="46" r="4.2" fill="#F6BE00"/><circle cx="40.4" cy="27.6" r="2.5" fill="#9C7CB6"/><circle cx="18.3" cy="88.1" r="2.3" fill="#969C9E"/><circle cx="64.4" cy="96.3" r="3.3" fill="#008EB4"/><circle cx="37" cy="60.7" r="3.3" fill="#5FC3E6"/><circle cx="59.6" cy="74.4" r="3" fill="#F46B00"/><circle cx="89.8" cy="38" r="3.4" fill="#5FC3E6"/><circle cx="89.8" cy="83.5" r="2.7" fill="#FF8F00"/><g fill="#4C4C4C"><path d="M21.1 118.6c-.7 0-1.4.2-2.1.7v-3.9h-1.6v9.1c0 2.3 1.5 3.9 3.6 3.9 1.2 0 2.2-.5 2.9-1.4.7-.9 1-2 1-3.5s-.3-2.6-1-3.4c-.6-1-1.6-1.5-2.8-1.5zm2.3 4.8c0 1.1-.2 1.9-.6 2.5-.4.5-.9.8-1.7.8-1.4 0-2-1.2-2-2.3v-2.3c0-1.1 1.2-1.9 2-1.9s1.3.3 1.7.8c.4.6.6 1.4.6 2.4zM44.6 118.6c-2.2 0-3.6 1.4-3.6 3.8v5.7h1.6v-5.7c0-2 1.4-2.2 2-2.2s2 .2 2 2.2v5.7h1.6v-5.7c-.1-2.3-1.4-3.8-3.6-3.8zM30.8 120.3c-.2-.1-.4-.1-.6-.1-.6 0-2 .2-2 2.2v5.7h-1.6v-5.7c0-2.4 1.3-3.8 3.6-3.8.4 0 .7 0 1 .1l-.4 1.6zM55.7 115.3v3.9c-.6-.4-1.3-.6-2-.7-1.2 0-2.2.5-2.9 1.4-.7.9-1 2-1 3.4 0 1.5.3 2.7 1 3.5.7.9 1.7 1.3 2.9 1.4 2.1 0 3.6-1.6 3.6-3.9v-9.1l-1.6.1zm0 6.8v2.3c0 1.1-.6 2.3-2 2.3-.8 0-1.3-.3-1.7-.8-.4-.6-.6-1.4-.6-2.5s.2-1.8.6-2.4c.4-.5.9-.8 1.7-.8.8 0 2 .8 2 1.9zM90 120.2c.6 0 1.1.2 1.5.5.3.3.5.7.6 1.2l1.5-.1c0-1.1-.4-1.8-1.1-2.4-.7-.6-1.6-.9-2.5-.9-1.2 0-2.2.5-2.9 1.4-.7.9-1 2-1 3.5s.3 2.6 1 3.5c.7.9 1.7 1.4 2.9 1.4 1 0 1.9-.3 2.5-.9.7-.6 1-1.3 1.1-2.4l-1.5-.1c0 .6-.2 1-.6 1.3-.4.3-.9.5-1.5.5-.8 0-1.3-.3-1.7-.8-.4-.6-.6-1.4-.6-2.5s.2-1.9.6-2.5c.4-.4.9-.7 1.7-.7zM99.2 118.6c-.8 0-1.4.2-2 .6-.1 0-.1.1-.2.2v-4h-1.6v12.8H97v-5.7c0-1.2.8-2.3 2.1-2.3 1.2 0 1.9 1 1.9 2.2v5.7h1.6v-5.6c-.1-3.3-2.4-3.9-3.4-3.9zM84.7 126.6c-.4.3-.8.2-1.2 0-.3-.2-.5-.5-.5-1.1v-5.1h1.7v-1.6H83V117h-1.6v1.9h-1v1.6h1v5.1c0 1.3.6 2.2 1.4 2.6.9.4 2 .3 2.8-.3l-.9-1.3zM78.9 121.8c0-1-.3-1.8-1-2.4-.6-.5-1.5-.8-2.5-.8s-1.8.3-2.5.8c-.6.5-.9 1.1-1 1.8l1.5.1c0-.3.2-.5.4-.8.3-.3.8-.4 1.4-.4.6 0 1.1.1 1.5.4.3.3.5.6.5 1.1v.6h-1.8c-1 0-2 0-2.8.6-.7.5-1.1 1.3-1.1 2.3 0 1.8 1.4 2.9 3.6 2.9.8 0 1.8-.2 2.5-.7l.1.6h1.2v-6.1zm-1.6 3c0 1.4-1.2 1.9-2.2 1.9-.6 0-2-.1-2-1.3 0-.3.1-.8.5-1.1.4-.3 1.1-.3 1.9-.3h1.7V124.8zM39.2 121.8c0-1-.3-1.8-1-2.4-.6-.5-1.5-.8-2.5-.8s-1.8.3-2.5.8c-.6.5-.9 1.1-1 1.8l1.5.1c0-.3.2-.5.4-.8.3-.3.8-.4 1.4-.4.6 0 1.1.1 1.5.4.3.3.5.6.5 1.1v.6h-1.8c-1 0-2 0-2.8.6-.7.5-1.1 1.3-1.1 2.3 0 1.8 1.4 2.9 3.6 2.9.8 0 1.8-.2 2.5-.7l.1.6h1.2v-6.1zm-1.5 3c0 1.4-1.2 1.9-2.2 1.9-.6 0-2-.1-2-1.3 0-.3.1-.8.5-1.1.4-.3 1.1-.3 1.9-.3h1.7V124.8zM69.5 118.8l-1.9 6.8-2-6.8h-1.5l-1.9 6.8-2-6.8h-1.5l2.7 9.4h1.5l2-6.8 1.9 6.8h1.5l2.7-9.4"/></g></svg>
  </div>
);

export default Logo;
