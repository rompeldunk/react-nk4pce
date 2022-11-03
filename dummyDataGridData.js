import { BandSettingsButton } from '../components/BandSettingsButton/BandSettingsButton';

export const amsRows = [
  {
    id: 0,
    bandLimit: null,
  },
];

export const browseColumns = [
  {
    field: 'bandLimits',
    flex: 1,
    editable: false,
    disableColumnMenu: true,
    renderCell: renderDataSource,
  },
];

function renderDataSource(props) {
  const { value } = props;

  return (
    <BandSettingsButton
      options={value}
      onSave={(event, options) => handleCellChange(event, props, options)}
    />
  );
}

const handleCellChange = (event, props, newValue = null) => {
  const { api, id, field } = props;

  let value = newValue || event.target.value;

  api.setEditCellValue({ id, field, value }, event);
};
