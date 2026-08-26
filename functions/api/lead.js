import { createLeadHandlers } from '../_lib/taptaphome-direct.js';

const handlers = createLeadHandlers({
  site: 'solardach-kosten.de',
  mode: 'photovoltaics'
});

export const onRequestGet = handlers.onRequestGet;
export const onRequestOptions = handlers.onRequestOptions;
export const onRequestPost = handlers.onRequestPost;
