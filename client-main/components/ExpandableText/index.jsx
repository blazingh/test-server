import { useRouter } from 'next/router';
import { useState } from 'react';
import words from '~/constants/text/words';

const ExpandableText = ({ text, displayLength, className }) => {
  const { locale } = useRouter();
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((p) => !p);
  };
  return (
    <div className={className}>
      <p>
        {text.length <= displayLength ? text : text.substring(0, displayLength)}
        {text.length > displayLength && expanded && (
          <span>{text.substring(displayLength, text.length)}</span>
        )}
        {text.length > displayLength && (
          <span
            className=" text-blue cursor-pointer whitespace-nowrap"
            onClick={toggleExpanded}
          >
            {!expanded
              ? '...' + words[locale].more
              : ' ' + words[locale].showLess}
          </span>
        )}
      </p>
    </div>
  );
};

export default ExpandableText;
