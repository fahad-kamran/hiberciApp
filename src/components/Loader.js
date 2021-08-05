import CircularProgress from '@material-ui/core/CircularProgress';
import '../assets/css/Loader.css'

export default function CircularIndeterminate() {
  return (
    <div className="Loader">
      <CircularProgress color="secondary"/>
    </div>
  );
}
