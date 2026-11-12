import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dttkhybhlozxodpgewrm.supabase.co'
const supabaseKey = 'sb_publishable_frEvQbPHWZZxaHQ4KuIqHA_5bihbRNA'

export const supabase = createClient(supabaseUrl, supabaseKey)