<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <a href="{{ route('generatepdf') }}">
        Cetak PDF
    </a>
    {{-- route bisa diubah untuk sementara --}}
    <form action="{{ route('importExcel') }}" method="post" enctype="multipart/form-data">
        @csrf
        <input type="file" name="file" id="">
        <button>Kirim</button>
    </form>
</body>
</html>