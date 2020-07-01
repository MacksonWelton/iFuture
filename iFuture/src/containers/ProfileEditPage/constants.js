export const editUserProfile = [
    {
      name: "name",
      label: "Nome",
      placeholder: "Nome e Sobrenome",
      type: "text",
      required: true,
      pattern: "[a-zA-Zà-úÀ-ú ]{3,}",
      title: "Nome completo do Usuário"
    },
    {
      name: 'email',
      label: "Email",
      placeholder: "email@email.com",
      type: "email",
      required: true,
      title: "Digite um email Válido"
    },
    {
      name: 'cpf',
      label: "CPF",
      placeholder: "000.000.000-00",
      type: "text",
      required: true,
      pattern: "[0-9]{3,}[.]{1,}[0-9]{3,}[.]{1,}[0-9]{3,}[-]{1,}[0-9]{2,}",
      title: "Digite seu CPF com pontos e traço."
    }
  ]