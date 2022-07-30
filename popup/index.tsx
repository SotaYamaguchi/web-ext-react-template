 
import cssText from './styles.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import { Popup } from './Popup';
import { CSSStyleSheetType, DocumentType } from '../types/global';

const sheet = new CSSStyleSheet() as CSSStyleSheetType
sheet.replaceSync(cssText);

const appDocument = document as DocumentType
appDocument.adoptedStyleSheets = [sheet];

ReactDOM.render(<Popup />, appDocument.getElementById('root'));
