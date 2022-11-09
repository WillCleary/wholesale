<script setup>
const { findOne } = useStrapi();
const { reportGroup } = defineProps({
    "reportGroup": Object
});
const { id, attributes: { header, report_entries: { data: reportEntries } } } = reportGroup;
</script>

<template>
    <thead v-if="reportEntries.length">
        <tr>
            <th class="text-left px-2"> {{ header }} </th>
            <th class="text-left px-2">Origin</th>
            <th class="text-center px-2">Fresh</th>
            <th class="text-center px-2">Frozen</th>
        </tr>
    </thead>
    <FishReportRow v-if="reportEntries.length" v-for="reportEntry in reportEntries" :reportEntry="reportEntry" />
</template>