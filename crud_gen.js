const fs = require('fs');
const BASE_APP = "./src";
const BASE_PAGES = "./src/views/pages";


const objects = {
  inpute_text: `<CCol md={SIZE}>
        <CFormLabel htmlFor="validationPROPERTY">PROPERTY</CFormLabel>
        <CFormInput type="text" id="validationPROPERTY" defaultValue="" required />
        <CFormFeedback valid>Campo válido!</CFormFeedback>
        <CFormFeedback invalid>Por favor preencha um PROPERTY valido.</CFormFeedback>
      </CCol>`
}

const create = (appName, properties) => {
  let rawCreate = fs.readFileSync(`${BASE_PAGES}/template_crud/create.js`, 'utf8');
  let FORM_REPLACE = "";

  properties.map((item)=> {
    let field = objects.inpute_text.replaceAll("PROPERTY",item.property);
    field = field.replaceAll("SIZE", item.property_size);
    FORM_REPLACE+=`${field}\n`
  })

  rawCreate = rawCreate.replaceAll("FORM_REPLACE", FORM_REPLACE);
  rawCreate = rawCreate.replaceAll("BTN_SUBMIT_REPLACE", `Criar ${appName}`);
  rawCreate = rawCreate.replaceAll("APP_NAME", `${appName}`);
  fs.writeFileSync(`${BASE_PAGES}/${appName}/create.js`, rawCreate, 'utf8');
  console.log(rawCreate);
}

const addRoute = (appName) => {
  let raw_nav = fs.readFileSync(`${BASE_APP}/_nav.js`, 'utf8');
  let rawRoutes = fs.readFileSync(`${BASE_APP}/routes.js`, 'utf8');
  const baseNav = `{
        component: CNavItem,
        name: '${appName}',
        to: '/${appName}/create',
      },
      //TEMLATE_ADD`
  raw_nav = raw_nav.replaceAll("//TEMLATE_ADD", baseNav)
  const replaceObjectCreate = `const ${appName}Create = React.lazy(() => import('./views/pages/${appName}/create'))\n//TEMPLATE_ADD_OBJECT`;
  const replaceRouteCreate = `{ path: '/${appName}/create', name: '${appName} / Criar', element: ${appName}Create },\n//TEMPLATE_ADD_ROUTE`
  rawRoutes = rawRoutes.replaceAll("//TEMPLATE_ADD_OBJECT", replaceObjectCreate)
  rawRoutes = rawRoutes.replaceAll("//TEMPLATE_ADD_ROUTE", replaceRouteCreate)
  fs.writeFileSync(`${BASE_APP}/_nav.js`, raw_nav, 'utf8')
  fs.writeFileSync(`${BASE_APP}/routes.js`, rawRoutes, 'utf8')

}

const createCrud = () => {
  console.log(process.argv);
  const appName = process.argv[2]
  const properties = String(process.argv[3]).split(",").map((item)=> {
    const [property, property_size] = [...item.split(";")]
    return {property, property_size}
  });
  console.log("appName: ", appName);
  console.log("properties", properties);
  fs.mkdirSync(`${BASE_PAGES}/${appName}`);
  create(appName, properties);
  addRoute(appName)
  console.log("create", );
}

createCrud()
