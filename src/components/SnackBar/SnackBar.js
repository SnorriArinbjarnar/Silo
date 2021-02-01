import  './snackbar.css';

export default function SnackBar({message}) {
  return(
    <div id="snackbar" >
      {message}
    </div>
  );
}