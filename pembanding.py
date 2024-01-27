str1 = 'Python'
str2 = "Python"
if str1 == str2:   #bisa juga dengan :=
  print('str1 sama dengan str2')
else:
  print('str1 tidak sama dengan str2')

nama_depan = 'toko'
nama_belakang = 'pedia'

print('Nama Depan: %s' % nama_depan)
print('Nama Belakang: %s' % nama_belakang)
print('Nama Lengkap: %s %s' % (nama_depan,nama_belakang)) #ada spasi
print(nama_depan+nama_belakang+'\n')

print('Halo, {} {}'.format(nama_depan,nama_belakang))
print('Halo, {1}{0}'.format(nama_depan,nama_belakang)) #bisa ngatur urutan tampil
print(f"{nama_depan}\t{nama_belakang}")   #penulisan ini tidak bisa di versi 2
print(f"{nama_depan}\v{nama_belakang}") #kok ngga seperti diharapkan, nanti di cari info lagi
print('S1: ', nama_depan[3])    #sub string

