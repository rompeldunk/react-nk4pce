import { snack } from '@piscada/snackbar';
import { BandSettingsButton } from '../components/BandSettingsButton/BandSettingsButton';

export const amsRows = [
  {
    id: 0,
    parameter: 'lunchTarget',
    label: 'Lunch Target',
    percent: 80,
    time: '12:00',
    redLowLimit: 0,
    yellowLowLimit: 70,
    greenLowLimit: 90,
    greenHighLimit: 110,
    yellowHighLimit: 130,
    redHighLimit: 200,
  },
  {
    id: 1,
    parameter: 'endOfDayTarget',
    label: 'End Of Day Target',
    percent: 100,
    time: '20:00',
    redLowLimit: 0,
    yellowLowLimit: 70,
    greenLowLimit: 90,
    greenHighLimit: 110,
    yellowHighLimit: 130,
    redHighLimit: 200,
  },
];

const renderCell = (params) =>
  params.value === null ? '' : params.value + ' %';

export const browseColumns = [
  {
    field: 'label',
    headerName: 'Label',
    sortable: false,
    editable: true,
    disableColumnMenu: true,
    flex: 1.5,
  },
  {
    field: 'percent',
    headerName: 'Percent',
    sortable: false,
    editable: true,
    type: 'number',
    renderCell,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: 'time',
    headerName: 'Time',
    sortable: false,
    editable: true,
    disableColumnMenu: true,
    flex: 1,
    preProcessEditCellProps: (params) => {
      const hasError = !isTimePattern(params.props.value);
      return { ...params.props, error: hasError };
    },
  },
  {
    field: 'useBandPlot',
    headerName: 'Use Band Plot',
    sortable: false,
    editable: true,
    type: 'boolean',
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: 'bandLimits',
    flex: 1,
    editable: false,
    disableColumnMenu: true,
    renderCell: renderDataSource,
  },
];

function isTimePattern(str) {
  const res = str.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);
  if (!res) snack.error('Bad time pattern');

  return res;
}

function renderDataSource(props) {
  const { value, field } = props;

  if (field === 'bandLimits') {
    return (
      <BandSettingsButton
        options={value}
        onSave={(event, options) => handleCellChange(event, props, options)}
      />
    );
  }
  return <div></div>;
}

const handleCellChange = (event, props, newValue = null) => {
  const { api, id, field } = props;

  let value = newValue || event.target.value;

  api.setEditCellValue({ id, field, value }, event);
   
  }
};
