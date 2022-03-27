import TextEditor from './components/TextEditor';
import './App.css';
import { useState } from 'react';

const toolbar =
	'undo redo | formatselect | ' +
	'bold italic backcolor | alignleft aligncenter ' +
	'alignright alignjustify | bullist numlist outdent indent | ' +
	'removeformat | help';

const plugins = [
	'advlist autolink lists link image charmap print preview anchor',
	'searchreplace visualblocks code fullscreen',
	'insertdatetime media table paste code help wordcount',
];

const App = () => {
	const [editorStr, setEditorStr] = useState('');

	const handleEditorChange = (newValue: string, editorRef: any) => {
		setEditorStr(newValue);
	};

	return (
		<div className='app'>
			<TextEditor
				value={editorStr}
				onEditorChange={handleEditorChange}
				tinymceSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
				plugins={plugins}
				toolbar={toolbar}
				inline={true}
				language='en'
			/>
		</div>
	);
};

export default App;
