import ForgeUI, { render, Fragment, IssuePanel, useState, useProductContext } from '@forge/ui';
import { fetchData } from './utils/requests';

import Labels from './labels';
import Components from './Components';

const App = () => {
  const productContext = useProductContext();
  const projectKey = productContext.platformContext.projectKey;
  const [labels] = useState(async () => fetchData(`label`));
  const [components] = useState(async () => fetchData(`project/${projectKey}/components`));
  

  return (
    <Fragment>
      <Labels labels={labels} />
      <Components components={components} />
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
