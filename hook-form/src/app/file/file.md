<h1>React Hook Form</h1>

Dependência do projeto
```
yarn add sass

yarn add react-hook-form
```
<b>File</b>

Input utilizado para selecionar arquivo.
- `accept` é utilizado para criar um filtro de pre-visualização dos arquivos segunda a extensão, mas isso não significa que os usuários não poderão selecionar outras extensão de arquivo na sua máquina local.

O `FileList` é o tipo de atributo para definir para o atributo do objeto do form

```
type Input = {
    files: FileList
}
```

- código: usecase1.tsx
```
<input 
    accept=".jpg, .jpeg, .png" 
    className="form-control form-control-sm"  
    {...register("files", { required: true })} 
    type="file" />
<input type="submit" value="enviar" />
```

<b>Retornar o base64 de uma imagem</b>

Para retornar o base64 de imagem do `input[file]` é utilizado a classe `FileReader` para transformar o arquivo em base64
- código: usecase2.tsx
```
let file = getValues().files[0]
let reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () => {
    let base64 = reader.result;
    console.log(base64)
};
```

