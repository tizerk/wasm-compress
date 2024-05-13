import { useEffect, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function DropZone() {
	const [file, setFile] = useState([]);
	useEffect(() => {
		console.log(file[0]);
	}, [file]);
	return (
		<>
			<div>
				<FilePond
					files={file}
					onupdatefiles={setFile}
					dropValidation={true}
					name="file"
					labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
				/>
			</div>
		</>
	);
}

export default DropZone;
