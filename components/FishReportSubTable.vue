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
            <th class="text-left text-xs md:text-lg pr-2 pt-8"> {{ header }} </th>
            <th class="text-center text-xs md:text-lg min-w-4 pr-2 pt-8">Origin</th>
            <th class="text-center text-xs md:text-lg min-w-4 pr-2 pt-8">Fresh</th>
            <th class="text-center text-xs md:text-lg min-w-4 pt-8">Frozen</th>
        </tr>
    </thead>
    <FishReportRow v-if="reportEntries.length" v-for="reportEntry in reportEntries" :reportEntry="reportEntry" />
</template>