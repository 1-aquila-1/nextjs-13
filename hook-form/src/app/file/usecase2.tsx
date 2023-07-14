import Image from 'next/image'
import styles from './file.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'

export default function UseCase() {

  type Input = {
    files: FileList
  }

  const [imgUpload, setImgUpload] = useState<any>(null)

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>()
  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data)
  }


  const carregou = (e: any) => {
    if (e?.imagem?.length === 0) {
      return;
    }
    let file = getValues().files[0]

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64 = reader.result;
      setImgUpload(base64)
    };
  }

  const temImagem = imgUpload !== null


  return (
    <main className={styles.main}>
      <h1>Input file</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={temImagem ? styles.opcao_img : styles.opcao_sem_img}>
          {
            temImagem ? <Image className={styles.img} src={imgUpload} alt="" layout='fill'/> : ""
          }
          <label className={temImagem ? styles.img_selecionado_label : styles.label} htmlFor="profile_pic">{temImagem?"Editar":"Selecione a imagem"}</label>
          <input id="profile_pic" accept=".jpg, .jpeg, .png" className="form-control form-control-sm"  {...register("files", { required: true, onChange: carregou })} type="file" />
        </div>
        <input type="submit" value="enviar" />
      </form>
    </main>
  )
}
