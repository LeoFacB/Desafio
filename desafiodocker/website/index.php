<!DOCTYPE html>
<html lang="en">
<style>
    .tabela{
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        border-collapse:collapse;
    }
    th, td{
        text-align: center;
    }
</style>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista Funcionários</title>
</head>
<body>
    <?php
        $resultado= file_get_contents("http://nodecontainer:3000/funcionarios");
        $funcionarios= json_decode($resultado);
    ?>
    <table border='1' class="tabela">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Cargo</th>
                <th>Salario</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($funcionarios as $funcionarios): ?>
                <tr>
                    <td><?php echo $funcionarios->Nome; ?> </td>
                    <td><?php echo $funcionarios->Sobrenome; ?> </td>
                    <td><?php echo $funcionarios->Cargo; ?> </td>
                    <td><?php echo $funcionarios->Salario; ?> </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    
</body>
</html>