import React from 'react';
import PropTypes from 'prop-types';
import {FaFileImage as IconImage} from 'react-icons/fa';
import ToolbarButton from './toolbar-button';
import {browserSelectBackground}  from '../../utils/browser';

export default function ToolbarSelectBackgroundButton({state}, {translator, projectActions}) {

  let selectBackgroundImageFromFile = event => {
    event.preventDefault();
    browserSelectBackground().then((data) => {
      projectActions.setBackgroundImage(JSON.parse(data));
    });
  };

  return (
    <ToolbarButton active={false} tooltip={translator.t("Select Background Image or PDF file")} onClick={selectBackgroundImageFromFile}>
      <IconImage />
    </ToolbarButton>
  );
}

ToolbarSelectBackgroundButton.propTypes = {
  state: PropTypes.object.isRequired,
};

ToolbarSelectBackgroundButton.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
